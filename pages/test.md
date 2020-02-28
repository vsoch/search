---
layout: default
title: {{ site.name }}
permalink: /test/
excluded_in_search: true
---

{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})
    {{ repository }}
{% endfor %}

