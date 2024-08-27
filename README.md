# Geta.Optimizely.IndexContentInFind

* Master<br>
![](http://tc.geta.no/app/rest/builds/buildType:(id:GetaPackages_EPiIndexContentInFind_00ci),branch:master/statusIcon)

Tool to index content items in Episerver Find. Makes it possible to index a single item or an item including it's descendents.

![ScreenShot](/docs/screenshot-01.png)

## Configuration

For the IndexContentInFind to work, you have to call `AddIndexContentInFind` extension method in `Startup.ConfigureServices` method.
```cs
services.AddIndexContentInFind();
```
or add it through the appsettings.json
```json
{
  "EPiServer": {
    "CmsUI": {
      "ProtectedModule": {
        "Items": [
          { "Name": "Geta.Optimizely.IndexContentInFind" }
        ]
      }
    }
  }
}
```