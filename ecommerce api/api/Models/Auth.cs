﻿namespace api.Models
{
    public class Auth
    {
        public string Message { get; set; }
        public bool IsAuthenticated { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public DateTime ExpiresOn { get; set; }
    }
}
