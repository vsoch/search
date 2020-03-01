# Search

![assets/search.png](assets/search.png)

This is an interface that uses GitHub pages and the API that is provided there to 
render a searchable interface of repositories for an individual or organization.
See [this post]() for a review of how it works.

## Usage

To use this repository for your organization, just fork it there, and turn
on GitHub pages! By default, this will render an interface at `<account>.github.io/search`.
If you want to change this, simply rename the repository, and be sure to change
the baseurl variable in [_config.yml](_config.yml). You'll also likely
want to change the title (appears in the top left)

```yaml
title:        vsoch/search
baseurl:      "/search"
```

The repository variable is required to run the "github-pages" plugin locally.

```yaml
repository:    vsoch/search
```

If you haven't already, you would need to [install Jekyll]() and then
install dependencies using the [Gemfile](Gemfile):

```bash
bundle install
```

Rendering the site locally can be done as follows:

```bash
bundle exec jekyll serve
```

**Warning** it's fairly easy to use up your rate limit rendering locally.
I recommend working carefully and doing a test when you are ready, and using
GitHub pages to render for you (I didn't seem to ever get any messages about limits
when I pushed there, however I tried to do this conservatively).

## Customize

You are free to customize the style as you please, and specifically the color
of the "scroll to top" bottom can be customized from the [_config.yml](_config.yml).

```yaml
# Scrolltop color
scrolltop_color: "#fd1268"
```

I chose a pink that matches my GitHub icon, and I suspect you'd want to do the
same for your user or organization account.

## Contributing

Would you like to contribute to vsoch/search to make it better? Please
[open an issue](https://github.com/vsoch/search) with a question, issue,
or anything else you'd like to discuss.
