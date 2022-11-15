# Why another CMS?

## History

\<history-talk\>

Motor CMS grew out of a need for a flexible and fast framework to implement a various CRUD operations on a multitude of
more-or-less complex database relations for a hobby project.

While learning Laravel, it became clear that Laravel itself can be leveraged to be even easier to use and faster to
develop for. 

\<\/history-talk\>

## Is it actually a CMS?

Short answer - it once was, but now it's not... kind of

## What can I do with it?

Currently, it's a set of tools, controllers and generators to facility API development. On top of Motor-Core,
which hosts this functionality, there are modules that actually can be used as a base for a CMS.

Motor-Admin has all necessary modules like role-based authentication and multi-tenancy as well as some other useful
things and Motor-Media includes file upload and management capabilities.

## What are the components?

We have the headless Motor backend, and the VueJS frontend, which consumes the APIs of the backend. Both currently
have a 1:1 relation in terms of module naming and functionality.