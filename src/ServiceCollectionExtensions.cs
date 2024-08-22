using System;
using System.Linq;
using EPiServer.Shell.Modules;
using Microsoft.Extensions.DependencyInjection;

namespace Geta.Optimizely.IndexContentInFind
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddIndexContentInFind(this IServiceCollection services)
        {
            return services.Configure<ProtectedModuleOptions>(
                 pm =>
                 {
                     if (!pm.Items.Any(i => i.Name.Equals(Constants.ModuleName, StringComparison.OrdinalIgnoreCase)))
                     {
                         pm.Items.Add(new ModuleDetails { Name = Constants.ModuleName });
                     }
                 });
        }
    }
}