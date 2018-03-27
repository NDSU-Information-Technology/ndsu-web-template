{"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    <div class=\"container\">\n"
    + ((stack1 = (helpers.getJsonContext || (depth0 && depth0.getJsonContext) || alias2).call(alias1,"{\"title\": \"Bachelor of Science\"}",{"name":"getJsonContext","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.getJsonContext || (depth0 && depth0.getJsonContext) || alias2).call(alias1,"{\"title\": \"Overall B.S. Learning Goals\", \"h5\": true}",{"name":"getJsonContext","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <section class=\"\" role=\"navigation\">\n            <h5 class=\"sub-nav-title\"><a href=\"/ndsu-web-template/sample-pages/department/degrees/undergraduates/\" class=\"nav-link active-branch\">Undergraduate Programs</a></h5>\n"
    + ((stack1 = (helpers.getJsonContext || (depth0 && depth0.getJsonContext) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"{\n                \"additionalClasses\": [\n                    \"navbar-vertical\",\n                    \"accordion\"\n                ],\n                \"links\": [\n                    {\n                        \"url\": \"/ndsu-web-template/sample-pages/department/degrees/undergraduates/bs/\",\n                        \"text\": \"Bachelor of Science\",\n                        \"active\": true,\n                        \"childNavbar\": {\n                            \"additionalClasses\": [\n                                \"navbar-vertical\"\n                            ],\n                            \"links\": [\n                                {\n                                    \"url\": \"#Overall\",\n                                    \"text\": \"Overall\"\n                                },\n                                {\n                                    \"url\": \"#Courses\",\n                                    \"text\": \"Courses\"\n                                },\n                                {\n                                    \"url\": \"#Internships\",\n                                    \"text\": \"Internships\"\n                                }\n                            ]\n                        }\n                    },\n                    {\n                        \"url\": \"/ndsu-web-template/sample-pages/department/degrees/undergraduates/ba/\",\n                        \"text\": \"Bachelor of Arts\"\n                    },\n                    {\n                        \"url\": \"/ndsu-web-template/sample-pages/department/degrees/undergraduates/double/\",\n                        \"text\": \"Double Majors\"\n                    },\n                    {\n                        \"url\": \"/ndsu-web-template/sample-pages/department/degrees/undergraduates/minors/\",\n                        \"text\": \"Minors\"\n                    }\n                ]\n            }",{"name":"getJsonContext","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["_navbar-main"],depth0,{"name":"_navbar-main","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["_generic-content"],depth0,{"name":"_generic-content","fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "        <p>The Bachelor of Science provides the best all-around preparation for someone intending to make a career in the computing areas.</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["_generic-content"],depth0,{"name":"_generic-content","fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "        <ol>\n            <li>\n                <div>Apply Knowledge</div>\n                <p>An ability to apply knowledge of computer and mathematics appropriate to the discipline;</p>\n            </li>\n            <li>\n                <div>Analyze Problems</div>\n                <p>An ability to analyze a problem, and identify and define the computing requirements appropriate to its solution;</p>\n            </li>\n            <li>\n                <div>Develop Solutions</div>\n                <p>An ability to design, implement, and evaluate a computer-based system, process, component, or program to meet desired needs;</p>\n            </li>\n            <li>\n                <div>Work in Teams</div>\n                <p>An ability to function effectively on teams to accomplish a common goal;</p>\n            </li>\n            <li>\n                <div>Understand Issues</div>\n                <p>An understanding of professional, ethical, legal, security, and social issues and responsibilities;</p>\n            </li>\n            <li>\n                <div>Analyze Impact</div>\n                <p>An ability to analyze the local and global impact of computing on individuals, organizations and society;</p>\n            </li>\n            <li>\n                <div>Use Current Methods and Tools</div>\n                <p>An ability to use current techniques, skills, and tools necessary for computing practices;</p>\n            </li>\n            <li>\n                <div>Understand Trade-offs</div>\n                <p>An ability to apply mathematical foundations, algorithmic principles, and computer science theory in the modeling and design of computer-based systems in a way that demonstrates comprehension of the trade-offs involved in design choices;</p>\n            </li>\n        </ol>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials._bigquote,depth0,{"name":"_bigquote","hash":{"source":"John Doe","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex.","color":"yellow"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["_layout-department-two-column"],(depth0 != null ? depth0.reverse : depth0),{"name":"_layout-department-two-column","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["nav-col"],"data":data}) || fn;
  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"args":["after-two-col"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true}