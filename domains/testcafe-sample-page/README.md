# TestCafe Sample Page Domain

This folder is, by convention, the place for all step definition files related to the TestCafe Sample Page.

By convention, step definition files are organized in the following way:

* the `models` folder contains the definition for all the page model/view model/data model you want to use at runtime;
* the `selectors` folder contains the definitions for all TestCafe Selectors you will need at runtime;
* the `steps` folder contains the implementation of each steps;
* the `given-when-then-mappings.ts` file contains the mapping between step names and implementation;
* the `index.ts` file gathers all items exposed by the domain:
  * all step names; 
  * all mappings;
  * all object models.