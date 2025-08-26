namespace LearningApis.Entities.Models
{

    public class User
    {
        public Guid Id { get; set; }
        public required string UserName { get; set; }
        public required string UserPassword { get; set; }
        public required string UserEmail { get; set; }
    }
}
