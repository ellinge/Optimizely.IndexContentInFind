using System.Linq;
using System.Reflection;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.Framework.Localization;
using EPiServer.Framework.Localization.XmlResources;
using Microsoft.Extensions.DependencyInjection;

namespace Geta.Optimizely.IndexContentInFind
{
    [ModuleDependency(typeof(EPiServer.Web.InitializationModule))]
    [InitializableModule]
    public class IndexContentInFindInitialization : IInitializableModule
    {
        private const string LocalizationProviderName = "Geta.Optimizely.IndexContentInFind.EmbeddedLangFiles";
        private static bool _initialized;
        private static readonly object _lock = new object();

        public void Initialize(InitializationEngine context)
        {
            lock (_lock)
            {
                if (_initialized)
                {
                    return;
                }

                AddLocalizationProvider(context.Locate.Advanced.GetService<LocalizationService>());
                _initialized = true;
            }
        }

        public void Uninitialize(InitializationEngine context)
        {
        }

        private void AddLocalizationProvider(LocalizationService localizationService)
        {
            var providerBasedLocalizationService = localizationService as ProviderBasedLocalizationService;

            if (providerBasedLocalizationService == null || providerBasedLocalizationService.ProviderList.Any(p => p.Name.Equals(LocalizationProviderName)))
            {
                return;
            }

            var localizationProviderInitializer = new EmbeddedXmlLocalizationProviderInitializer();
            var localizationProvider = localizationProviderInitializer.GetInitializedProvider(LocalizationProviderName, Assembly.GetExecutingAssembly());

            providerBasedLocalizationService.AddProvider(localizationProvider);
        }
    }
}