namespace api.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } 
        public int ProductId { get; set; }
        public Product Product { get; set; } 
        public string Value { get; set; } = string.Empty;
        public string CreatedAt { get; set; } = string.Empty;
    }
}
