using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MochaTestApi.Models
{
    public class Post
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}
