using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MochaTestApi.Services;
using Refit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MochaTestApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options => {
                options.EnableEndpointRouting = false;
            }).AddXmlSerializerFormatters();

            services.AddRefitClient<IFruitApiService>()
                .ConfigureHttpClient(c =>
                {
                    c.BaseAddress = new Uri("https://www.fruityvice.com");
                    c.Timeout = TimeSpan.FromSeconds(10);
                });

            services.AddRefitClient<IPostsApiService>()
                .ConfigureHttpClient(c =>
                {
                    c.BaseAddress = new Uri("https://jsonplaceholder.typicode.com");
                    c.Timeout = TimeSpan.FromSeconds(10);
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            //app.UseMvcWithDefaultRoute();
            app.UseRouting();

            app.UseEndpoints(endpoint=> { endpoint.MapControllers(); });
        }
    }
}
