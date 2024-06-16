using api.Data;
using api.Dto;
using api.Helpers;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationContext context;
        private readonly JWT jwt;

        public AuthController(
            ApplicationContext context,
            IOptions<JWT> jwt
            )
        {
            this.context = context;
            this.jwt = jwt.Value;
        }

        [HttpPost("register")]
        public IActionResult register(UserDto model)
        {
            var authModel = new Auth();

            if (!ModelState.IsValid)
            {
                authModel.Message = "Please Check Your Data and send again";
                return BadRequest(authModel.Message);
            }

            var user = context.Users.FirstOrDefault(u => u.Email == model.Email);
             
            if(user != null)
            {
                authModel.Message = "Email is already registered!";
                return BadRequest(authModel.Message);
            }

            var newUser = new User()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Address = model.Address,
                Email = model.Email,
                Mobile = model.Mobile,
                Password = model.Password,
                CreatedAt = DateTime.Now.ToString("ddd, MMM dd yyyy HH:mm:ss 'GMT'K '(Egypt Standard Time)'"),
                ModifiedAt = DateTime.Now.ToString("ddd, MMM dd yyyy HH:mm:ss 'GMT'K '(Egypt Standard Time)'")
            };

            context.Add(newUser);
            context.SaveChanges();
            authModel.Message = "Your Account Created Successfully";
            authModel.Email = model.Email;
            authModel.FullName = $"{model.FirstName} {model.LastName}";
            authModel.IsAuthenticated = true;
            return Ok(authModel);
        }


        [HttpPost("login")]
        public async Task<IActionResult> login(LoginDto model)
        {
            var authModel = new Auth();

            if (!ModelState.IsValid)
            {
                return BadRequest("inVaild");
            }

            var user = context.Users.FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);

            if (user == null)
            {
                return BadRequest("inVaild");
            }

            return Ok(CreateToken(user).Token);
        }

        private Auth CreateToken(User user)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
                {
                    new Claim("id", user.Id.ToString()),
                    new Claim("firstName", user.FirstName),
                    new Claim("lastName", user.LastName),
                    new Claim("address", user.Address),
                    new Claim("mobile", user.Mobile),
                    new Claim("email", user.Email),
                    new Claim("createdAt", user.CreatedAt),
                    new Claim("modifiedAt", user.ModifiedAt)
                };
            var jwtToken = new JwtSecurityToken(
                    issuer: jwt.Issuer,
                    audience: jwt.Audience,
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(jwt.DurationInDays),
                    signingCredentials: signingCredentials);
            var authModel = new Auth();
            authModel.Message = "Login Successfully";
            authModel.Email = user.Email;
            authModel.FullName = $"{user.FirstName} {user.LastName}";
            authModel.IsAuthenticated = true;
            authModel.Token = new JwtSecurityTokenHandler().WriteToken(jwtToken) ;
            authModel.ExpiresOn = jwtToken.ValidTo;

            return authModel;
            
        }
    }
}
