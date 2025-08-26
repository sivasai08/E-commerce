namespace LearningApis.Models
{
    public class AddUserDto
    {
        public required string UserName { get; set; }
        public required string UserPassword { get; set; }
        public required string UserEmail { get; set; }
    }
}
