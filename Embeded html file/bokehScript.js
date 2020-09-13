(function() {
    var fn = function() {
      Bokeh.safely(function() {
        (function(root) {
          function embed_document(root) {
            
          var docs_json = document.getElementById('1164').textContent;
          var render_items = [{"docid":"f9f4689e-cdb4-43e5-a3d2-4e9d3f074e03","root_ids":["1001"],"roots":{"1001":"9faffeee-b6b4-419a-94cd-cd080c202537"}}];
          root.Bokeh.embed.embed_items(docs_json, render_items);
        
          }
          if (root.Bokeh !== undefined) {
            embed_document(root);
          } else {
            var attempts = 0;
            var timer = setInterval(function(root) {
              if (root.Bokeh !== undefined) {
                clearInterval(timer);
                embed_document(root);
              } else {
                attempts++;
                if (attempts > 100) {
                  clearInterval(timer);
                  console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                }
              }
            }, 10, root)
          }
        })(window);
      });
    };
    if (document.readyState != "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  })();