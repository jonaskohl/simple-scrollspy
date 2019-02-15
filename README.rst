Simple ScrollSpy
================

Simple ScrollSpy is an easy-to-use scrollspy library for your website.

Scroll... what?
---------------

Scrollspy does not have anything to do with spying! It merely updates
links in a navigation bar when scrolling through the page to highlight
the currently viewed section.

Usage
-----

Page structure
**************

First, make sure that your page has a similar structure to this:

::

    <header>
      <a href="#sec1" class="active link">Section 1</a>
      <a href="#sec2" class="link">Section 2</a>
      <a href="#sec3" class="link">Section 3</a>
      <a href="#sec4" class="link">Section 4</a>
      <a href="#sec5" class="link">Section 5</a>
    </header>
    <main>
      <section id="sec1">Section 1</section>
      <section id="sec2">Section 2</section>
      <section id="sec3">Section 3</section>
      <section id="sec4">Section 4</section>
      <section id="sec5">Section 5</section>
    </main>

Including the library
*********************

Then include the Simple ScrollSpy library at the end of your ``<body>`` tag.

::

    <script src="simplescrollspy.js"></script>

Customising
***********

If you have different elements, you can edit the selectors and classes in
``simplescrollspy.js`` under the *SETTINGS* section.
