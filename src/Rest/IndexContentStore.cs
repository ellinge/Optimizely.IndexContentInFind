using System;
using System.Net;
using EPiServer.Core;
using EPiServer.Shell.Services.Rest;
using Microsoft.AspNetCore.Mvc;

namespace Geta.Optimizely.IndexContentInFind.Rest
{
    [RestStore("indexcontentstore")]
    public class IndexContentStore : RestControllerBase
    {
        private readonly IIndexService _indexService;

        public IndexContentStore(IIndexService indexService)
        {
            _indexService = indexService ?? throw new ArgumentNullException(nameof(indexService));
        }

        [HttpPost]
        public virtual ActionResult Post([FromBody] IndexInFindRequest data)
        {
            if (data == null || !ContentReference.TryParse(data.ContentLink, out ContentReference contentLink) || ContentReference.IsNullOrEmpty(contentLink))
            {
                return StatusCode((int)HttpStatusCode.BadRequest, "ContentLink cannot be null.");
            }

            var indexingResults = data.IncludeDescendants
                ? _indexService.IndexFrom(contentLink, data.Force)
                : _indexService.Index(contentLink, data.Force);

            return Rest(indexingResults);
        }
    }

    public class IndexInFindRequest
    {
        public string ContentLink { get; set; }
        public bool IncludeDescendants { get; set; }
        public bool Force { get; set; }
    }
}