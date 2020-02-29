---
layout: default
title: {{ site.name }}
permalink: /
excluded_in_search: true
---

<div class="right-panel">
<div id="searchbox"><div class="ais-SearchBox"><form action="" role="search" class="ais-SearchBox-form" novalidate=""><input class="ais-SearchBox-input" type="search" placeholder="" autofocus="true" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="512"><button class="ais-SearchBox-submit" type="submit" title="Submit the search query."><svg class="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40"> <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path> </svg></button><button class="ais-SearchBox-reset" type="reset" title="Clear the search query." hidden=""><svg class="ais-SearchBox-resetIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10"> <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path> </svg></button><span class="ais-SearchBox-loadingIndicator" hidden=""><svg class="ais-SearchBox-loadingIcon" width="16" height="16" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#444"> <g fill="none" fillrule="evenodd"> <g transform="translate(1 1)" strokewidth="2"> <circle strokeopacity=".5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18"> <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform> </path> </g> </g> </svg></span></form></div></div>
<div id="hits"><div><div class="ais-Hits"><ol class="ais-Hits-list">
{% for repo in site.github.public_repositories %}

<li class="ais-Hits-item {{ repo.language }} {{ repo.license.spdx_id }}"><div> <div class="hit-name"> 
<a href="{{ repo.html_url }}" target="_blank">{{ repo.name }}</a></div>
<dl> 
  <dt>Owner</dt>
  <dd><a href="{{ repo.owner.html_url }}" target="_blank">{{ repo.owner.login }}</a><img src="{{ repo.owner.avatar_url }}" width="30px"></dd> 
<dt>Description</dt><dd>{{ repo.description }}</dd> </dl> 
<div style=""> {% if repo.homepage %}<a target="_blank" href="{{ repo.homepage }}">Homepage</a>{% endif %} </div>
<div> <a target="_blank" href="{{ repo.html_url }}">Repository </a></div> 
<div style=""> Created at: {{ repo.created_at | date: "%-d %B %Y"}}</div>
<dl><dt>Stars</dt><dd>{{ repo.stargazers_count }}</dd> 
    {% if repo.license %}<dt>License</dt><dd><a href="{{ repo.license.url }}" target="_blank">{{ repo.license.name }}</a></dd>{% endif %}
    <dt>Language</dt><dd>{{ repo.language }}</dd> 
    <dt>Updated</dt><dd> {{ repo.updated_at | date: "%-d %B %Y" }}</dd> 
    {% if repo.has_issues %}<dt>Issues</dt><dd><a href="{{ repo.html_url }}/issues" target="_blank">{{ repo.issues_count }} ({{ repo.open_issues_count }} open)</a></dd>{% endif %}
    <dt>Watchers</dt><dd>{{ repo.watchers_count }}</dd> 
    <dt>Forks</dt><dd>{{ repo.forks_count }}</dd> 
    <dt>Size</dt><dd>{{ repo.size }}</dd> 
    <dt>Archived</dt><dd>{{ repo.archived }}</dd> 
    <dt>Branch (default)</dt><dd>{{ repo.default_branch }}</dd> 
</dl> 
</div></li>

{% endfor %}</ol></div></div></div>
<div id="pagination"><div class="ais-Pagination"><ul class="ais-Pagination-list"><li class="ais-Pagination-item ais-Pagination-item--firstPage ais-Pagination-item--disabled"><span class="ais-Pagination-link">«</span></li><li class="ais-Pagination-item ais-Pagination-item--previousPage ais-Pagination-item--disabled"><span class="ais-Pagination-link">‹</span></li><li class="ais-Pagination-item ais-Pagination-item--page ais-Pagination-item--selected"><a class="ais-Pagination-link" aria-label="1" href="#">1</a></li><li class="ais-Pagination-item ais-Pagination-item--page"><a class="ais-Pagination-link" aria-label="2" href="#">2</a></li><li class="ais-Pagination-item ais-Pagination-item--page"><a class="ais-Pagination-link" aria-label="3" href="#">3</a></li><li class="ais-Pagination-item ais-Pagination-item--page"><a class="ais-Pagination-link" aria-label="4" href="#">4</a></li><li class="ais-Pagination-item ais-Pagination-item--nextPage"><a class="ais-Pagination-link" aria-label="Next" href="#">›</a></li><li class="ais-Pagination-item ais-Pagination-item--lastPage"><a class="ais-Pagination-link" aria-label="Last" href="#">»</a></li></ul></div></div>
    </div>
</div>
