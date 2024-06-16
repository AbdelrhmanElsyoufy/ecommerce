using api.Data;
using api.Dto;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ECommerceController : ControllerBase
    {
        private readonly ApplicationContext context;

        public ECommerceController(
            ApplicationContext context)
        {
            this.context = context;
        }
        [HttpGet("categories")]
        public async Task<IActionResult> Categories()
        {
            
            return Ok(await context.Categories.ToListAsync());
        }

        [HttpGet("category")]
        public async Task<IActionResult> CategoryById(int id)
        {

            return Ok(await context.Categories.FindAsync(id));
        }

        [HttpGet("product")]
        public async Task<IActionResult> ProductById(int id)
        {

            return Ok( context.Products
                .Include(p => p.Offer)
                .Include(p => p.ProductCategory).FirstOrDefault(p => p.Id == id));
        }


        [HttpGet("products")]
        public  IActionResult Products(string category , string subCategory , int count)
        {

            return Ok(
                context.Products.Where(
                p => p.ProductCategory.Category ==  category
                && p.ProductCategory.SubCategory == subCategory
                ).Take(count).Include("ProductCategory").Include(p => p.Offer).ToList());
        }

        [HttpGet("offer/{id}")]
        public async Task<IActionResult> Offer(int id)
        {

            return Ok(await context.Offers.FindAsync(id));
        }


        [HttpPost("review")]
        public IActionResult review(ReviewDto reviewdto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid");
            }

            var review = new Review
            {
                ProductId= reviewdto.ProductId,
                UserId = reviewdto.UserId,
                Value = reviewdto.Value,
                CreatedAt = DateTime.Now.ToString("ddd, MMM dd yyyy HH:mm:ss 'GMT'K '(Egypt Standard Time)'")

            };

            context.Reviews.Add(review);
            context.SaveChanges();

            return Ok("Valid");

        }


        [HttpGet("review")]
        public IActionResult review(int id )
        {
            return Ok(
                context.Reviews
                .Include(r => r.User)
                .Include(r =>r.Product)
                .Where(r => r.ProductId == id).ToList());

        }
    }
}
