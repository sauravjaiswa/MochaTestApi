using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MochaTestApi.Models;
using MochaTestApi.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MochaTestApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostsApiService _postsApiService;

        public PostsController(IPostsApiService postsApiService)
        {
            _postsApiService = postsApiService;
        }

        [HttpGet]
        public async Task<IActionResult> GetPost()
        {
            try
            {
                var posts = await _postsApiService.GetAllPosts();

                if (posts == null)
                {
                    return NotFound("No posts");
                }

                return Ok(posts);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            try
            {
                var post = await _postsApiService.GetPost(id);

                return Ok(post);
            }
            catch (Exception e)
            {
                return NotFound("No post by given id");
            }
        }

        [HttpPost("add")]
        public IActionResult AddPost([FromBody] Post post)
        {
            try
            {
                if (!ModelState.IsValid || post.Id==0)
                {
                    return StatusCode(StatusCodes.Status400BadRequest);
                }

                _postsApiService.AddPost(post);

                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPost(int id, Post post)
        {
            try
            {
                await _postsApiService.PutPost(id, post);

                return StatusCode(StatusCodes.Status202Accepted);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchPost(int id, Post post)
        {
            try
            {
                await _postsApiService.PatchPost(id, post);

                return StatusCode(StatusCodes.Status202Accepted);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            try
            {
                await _postsApiService.DeletePost(id);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
    }
}
