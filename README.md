Read me for front end


### Build menu 

```
node cmd/build_menu.js
```


### Modules
Each module needs to implement a `menu.json`

Example: 
```
{
  "label": "Acquisition",
  "menu": [
    {
      "Label": "Purchases",
      "Icon": "home",
      "Children": [
        {
          "Label": "Providers",
          "href": "/admin/acquisition/AllProviders"
        },
        {
          "Label": "Quotations",
          "href": "/admin/acquisition/AllQuotations"
        },
        {
          "Label": "Orders",
          "href": "/admin/acquisition/AllOrders"
        },
        {
          "Label": "Receivings",
          "href": "/admin/acquisition/Receivings"
        },
        {
          "Label": "Deliveries",
          "href": "/admin/acquisition/Deliveries"
        }
      ]
    },
    {
      "Label": "Suggestions",
      "Icon": "spellcheck",
      "Children": [
        {
          "Label": "Import Suggestion",
          "href": "/admin/acquisition/ImportSugg"
        },
        {
          "Label": "Suggestion by reader",
          "href": "/admin/acquisition/SuggByReader"
        }
      ]
    }
  ]
}

```