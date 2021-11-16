using MochaTestApi.Models;
using Refit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MochaTestApi.Services
{
    public interface IFruitApiService
    {
        [Get("/api/fruit/all")]
        Task<IList<Fruit>> GetAllFruits();
    }
}
