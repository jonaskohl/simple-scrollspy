Usage
=====

You need a fixed navbar with links to all of the sections.
These links should be able to be selected with the selector
set in ``HeaderLinkSelector`` (see section *SETTINGS* in
`simplescrollspy.js`). The sections should be be selectable
with the selector set in ``SectionsSelector``. The class that
gets added to the header links is stored in
``HeaderLinkActiveClass``. The active header link should be
selectable with the selector stored in ``HeaderLinkActiveSelector``.
Keep in mind that ``HeaderLinkActiveSelector`` should contain the
``HeaderLinkActiveClass`` class name. This library yields best
results when all sections have a minimum height of the viewport
height (``min-height: 100vh``).

If this file is too large in size for your needs, you can use
an ES6 minifier, e.g. `UglifyJS online`_ to minify this file
after you have set your settings.

.. _UglifyJS online: https://skalman.github.io/UglifyJS-online/
