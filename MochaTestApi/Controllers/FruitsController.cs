using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MochaTestApi.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MochaTestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FruitsController : ControllerBase
    {
        private readonly IFruitApiService _fruitApiService;

        public FruitsController(IFruitApiService fruitApiService)
        {
            _fruitApiService = fruitApiService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var fruits = await _fruitApiService.GetAllFruits();

                if (fruits == null)
                {
                    return NotFound("No fruits");
                }

                return Ok(fruits);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var fruits = await _fruitApiService.GetAllFruits();
                var fruit = fruits.FirstOrDefault(f => f.Id == id);

                if (fruit == null)
                {
                    return NotFound("No fruit with such id");
                }

                return Ok(fruit);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
    }
}
