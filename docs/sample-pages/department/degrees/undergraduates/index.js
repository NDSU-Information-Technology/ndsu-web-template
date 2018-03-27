{"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "    <div class=\"container\">\n"
    + ((stack1 = (helpers.getJsonContext || (depth0 && depth0.getJsonContext) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"{\"title\": \"Undergraduate Program\"}",{"name":"getJsonContext","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    \n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <section class=\" \" role=\"navigation\">\n            <h5 class=\"sub-nav-title\"><div class=\"nav-link active\">Undergraduate Programs</div></h5>\n"
    + ((stack1 = (helpers.getJsonContext || (depth0 && depth0.getJsonContext) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"{\n                \"additionalClasses\": [\n                    \"navbar-vertical\"\n                ],\n                \"links\": [\n                    {\n                        \"url\": \"/ndsu-web-template/sample-pages/department/degrees/undergraduates/bs/\",\n                        \"text\": \"Bachelor of Science\"\n                    },\n                    {\n                        \"url\": \"/ndsu-web-template/sample-pages/department/degrees/undergraduates/ba/\",\n                        \"text\": \"Bachelor of Arts\"\n                    },\n                    {\n                        \"url\": \"/ndsu-web-template/sample-pages/department/degrees/undergraduates/double/\",\n                        \"text\": \"Double Majors\"\n                    },\n                    {\n                        \"url\": \"/ndsu-web-template/sample-pages/department/degrees/undergraduates/minors/\",\n                        \"text\": \"Minors\"\n                    }\n                ]\n            }",{"name":"getJsonContext","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["_navbar-main"],depth0,{"name":"_navbar-main","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["_generic-content"],depth0,{"name":"_generic-content","fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "        <p>The Computer Science Department offers the most comprehensive and varied Computer Science program in the region. In the core courses required of all computer science majors, students are offered an opportunity to study concepts, applications and implementation techniques which provide a broad and practical base both for further study and for a career in computing.</p>\n        <p>Through advanced undergraduate courses, students have an opportunity for in-depth study of topics such as software engineering, large systems, systems modeling, computer graphics, and emerging areas. The department has also expanded offerings in software engineering, data mining and bioinformatics.</p>\n        <p>Students are encouraged to choose courses from related areas such as business, economics, engineering, mathematics, operations research, and statistics to broaden their program of study. A senior capstone experience that integrates multiple areas in computer science is required and provides an opportunity to add maturity to the computer science skill set before graduation.</p>\n        <p>The Department of Computer Science and Operations Research offers both a \n            <a href=\"/ndsu-web-template/sample-pages/department/degrees/undergraduates/bs/\">Bachelor of Science</a> and a \n            <a href=\"/ndsu-web-template/sample-pages/department/degrees/undergraduates/ba/\">Bachelor of Arts</a> in computer science. \n            In addition, we cooperate with the Department of Physics in offering a double major in Physics and Computer Science and with \n            the Department of Mathematics in offering a double major in Mathematics and Computer Science. We also provide courses for the Management Information Systems (MIS) degree program. \n            All of these programs represent a spectrum of options for students interested in a career involving computing.</p>\n        <p>For more information about the Undergraduate Computer Science Program, check out the <a href=\"https://www.ndsu.edu/majors/compsci/\">NDSU CS Majors Fact Sheet.</a></p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials._bigquote,depth0,{"name":"_bigquote","hash":{"source":"John Doe","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex."},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["_layout-department-two-column"],depth0,{"name":"_layout-department-two-column","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["nav-col"],"data":data}) || fn;
  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"args":["after-two-col"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true}