using api.Models;

namespace api.Dto
{
    public class ReviewDto
    {
        public  int UserId { get; set; }
        public  int ProductId{ get; set; }
        public string Value { get; set; } = string.Empty;
    }
}
