using EPiServer.Framework.TypeScanner;
using EPiServer.Shell.Modules;
using Microsoft.Extensions.FileProviders;

namespace Geta.Optimizely.IndexContentInFind
{
    public class IndexContentInFindModule : ShellModule
    {
        public IndexContentInFindModule(string name, string routeBasePath, string resourceBasePath) : base(name, routeBasePath, resourceBasePath)
        {
        }

        public IndexContentInFindModule(string name, string routeBasePath, string resourceBasePath, ITypeScannerLookup typeScannerLookup, IFileProvider virtualPathProvider) : base(name, routeBasePath, resourceBasePath, typeScannerLookup, virtualPathProvider)
        {
        }
    }
}