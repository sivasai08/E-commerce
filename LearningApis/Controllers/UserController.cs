using LearningApis.Data;
using Microsoft.EntityFrameworkCore;
using LearningApis.Entities.Models;
using LearningApis.Models;
using Microsoft.AspNetCore.Mvc;


namespace LearningApis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserContext dbContext;
        public UserController(UserContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(dbContext.Users.ToList());
        }
        [HttpPost]
        public IActionResult AddUsers(AddUserDto addUserDto)
        {
            var UserEntity = new User()
            {
                UserName = addUserDto.UserName,
                UserPassword = addUserDto.UserPassword,
                UserEmail = addUserDto.UserEmail
            };
            dbContext.Users.Add(UserEntity);
            dbContext.SaveChanges();
            return Ok(UserEntity);

        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            var user = dbContext.Users.FirstOrDefault(u =>
                u.UserEmail == loginDto.Email && u.UserPassword == loginDto.Password);

            if (user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

            return Ok(new
            {
                Message = "Login successful",
                UserName = user.UserName
            });
        }
        [HttpPost("register")]
        public IActionResult Register([FromBody] AddUserDto addUserDto)
        {
            // Check if the email is already taken
            var existingUser = dbContext.Users.FirstOrDefault(u => u.UserEmail == addUserDto.UserEmail);
            if (existingUser != null)
            {
                return Conflict("Email already in use.");
            }

            var newUser = new User()
            {
                UserName = addUserDto.UserName,
                UserPassword = addUserDto.UserPassword, // You can hash this later
                UserEmail = addUserDto.UserEmail
            };

            dbContext.Users.Add(newUser);
            dbContext.SaveChanges();

            return Ok(new
            {
                Message = "User registered successfully.",
                newUser.UserName
            });
        }


    }
}
