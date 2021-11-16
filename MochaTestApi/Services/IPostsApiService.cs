using MochaTestApi.Models;
using Refit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MochaTestApi.Services
{
    public interface IPostsApiService
    {
        [Get("/posts")]
        Task<IList<Post>> GetAllPosts();

        [Get("/posts/{id}")]
        Task<Post> GetPost(int id);

        [Post("/posts")]
        Task AddPost(Post post);

        [Put("/posts/{id}")]
        Task PutPost(int id, Post post);

        [Patch("/posts/{id}")]
        Task PatchPost(int id, Post post);

        [Delete("/posts/{id}")]
        Task DeletePost(int id);
    }
}
