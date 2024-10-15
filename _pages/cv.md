---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<i>You can find a copy of my CV <a href="/files/cv.pdf">here</a>.</i>

<u>Below is a short summary</u>

Education
======
* <strong>PhD in Social Sciences, Vrije Universiteit Amsterdam, 2018-2024</strong>
  * Visiting PhD Candidate in Social Psychology, University of Queensland, 2022
* Research MSc (cum laude) in Social Psychology, Vrije Universiteit Amsterdam, 2016-2018
* BSc (cum laude) in Psychology, Vrije Universiteit Amsterdam, 2013-2016 

Work experience
======
* <strong>2024-Now: Post-Doctoral Research in Behavioral Ethics</strong>
  * <strong>University of Amsterdam</strong>

* 2021: Internship Policy Officer
  * Nederlandse Organisatie voor Wetenschappelijk Onderzoek

* 2017-2018: Workgroup Teacher Methods & Statistics
  * Vrije Universiteit Amsterdam

Service
======
* 2020-2024: PhD Student-Representative
  * Kurt Lewin Institute

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Selected talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
{% comment %}
 Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% endcomment %}
  