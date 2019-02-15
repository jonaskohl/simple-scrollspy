/**
 * Simple ScrollSpy
 * Version 1.0
 * Copyright (c) 2019
 * Jonas Kohl <https://jonaskohl.de/>
 * @license See LICENSE.rst or https://licenses.jonaskohl.de/lgpl/3.0/license.html
 * @usage See USAGE.rst
 */

/*** SETTINGS ***/

// The CSS selector for the sections
const SectionsSelector = "section"

// The CSS selector for navbar links
const HeaderLinkSelector = ".link"

// The CSS selector for active navbar links
const HeaderLinkActiveSelector = ".active.link"

// The class (no selector/period) of the active navbar link
const HeaderLinkActiveClass = "active"

// The fraction of the viewport height measured from the bottom
// the top of a section needs to surpass for being considered active.
const SectionActiveThreshold = 0.5

/*** CODE ***/
addEventListener("DOMContentLoaded", () => {
  console.log("%c[Simple ScrollSpy] %cLoaded library", "font-weight:700;color:#0c0", "font-weight:400;color:#000")
  addEventListener("scroll", () => {
    const sections = document.querySelectorAll(SectionsSelector)
    for (let i = sections.length; i-- > 0;) {
      const sec = sections[i]
      const rect = sec.getBoundingClientRect()
      if (window.scrollY + window.innerHeight * SectionActiveThreshold >= rect.y + window.scrollY) {
        document.querySelectorAll(HeaderLinkActiveSelector).forEach(lnk => {
          lnk.classList.remove(HeaderLinkActiveClass)
        })
        document.querySelectorAll(HeaderLinkSelector)[i].classList.add(HeaderLinkActiveClass)
        break
      }
    }
  })
})
