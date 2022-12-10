# Tailsite Template

![Tailsite Template Cover Image](https://dummyimage.com/920x400/ff2137/ffffff.gif&text=+++++++Tailsite+++++++)

See the [demo here](https://tailsite.2haas.com/).

## What is it?

A theme for Jekyll created with Tailwind CSS.

![Tailsite Screenshot Image](https://res.cloudinary.com/thaas/image/upload/v1643350435/tailsite_xxncms.png)

## Features

- Live Search
- SVG icons
- SEO Tags & Categories
- About page
- Contact page
- Custom 404 error page
- Feed RSS

## SEO

- Google Analytics
- Meta tags
- JSON-LD
- Sitemap.xml
- Social Media ready

### Site configuration

Below are some properties you can change in your project `_config.yml` to configure your site, check the [settings documentation](https://github.com/ajpalok/tailsite/wiki/Settings) for more details.

```yml
# Welcome to Jekyll!
# Site settings

name: Tailsite
title: Tailsite | Template by 2HAAS
description: >-
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
tags:
  -Jekyll
  -Template
  -Tailwindcss
  -Tailsite

# URL setup

baseurl: "" # the subpath of your site or repository name if using github pages, e.g. /repo_name
url: "https://tailsite.2haas.com" # main URL, e.g. 'https://yourname.github.io'

# Social Media ID's for the site

github_username: 2HAAS
facebook_username: 2haas
twitter_username: 2haas_tw
instagram_username: 2haas_insta
linkedin_username: 2haas
youtube_username: 2HAAS

# Contact form setup

contact:
  email: "example@2haas.com" # for contact mail to send mail (Or)
  formspree_form_id:   # instead use formspree id from formspree.io, ex: xxxxxxxx
  subject: "Want to contact with you.."
  sent_message_url: '/contact/message-sent/'
  address: 'physical address if you have any to mention, replace that in _config.yml file'


# Site permissions

show_hero: true # showing first post in big banner
author_cover: true # showing author cover image in author page.
#
#
#
#
#
#
# Comming soon with ads banner section
# google adsense setup
# ads_id: "ca-pub-xxxxxxxxxxxxxxx"

# Sites Necessary Configuration

language: "en"

# posts permalink
permalink: "/:title/"

#comming soon pagination for particular part
# pagination:
#   enabled: true

# Author & Category setup
collections:
  authors:
    output: true
    sidebar_label: Authors
  categories:
    output: true
    sidebar_label: Categories


defaults:
  -
    scope:
      path: ""
      type: "authors"
    values:
      layout: "author"
  -
    scope:
      path: ""
      type: "categories"
    values:
      layout: "category"
      
  -
    scope:
      path: ""
      type: "posts"
    values:
      layout: "post"

markdown: kramdown
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
highlighter: rouge
sass:
    style: compressed
compress_html:
  clippings: []
  comments: []
  endings: []
  ignore:
    envs: []
  blanklines: false
  profile: false
  startings: []
```

## Posts

Use the [Front Matter properties](https://github.com/ajpalok/tailsite/wiki/Post#front-matter-properties) to create posts.

## Release notes

### v1.0.0
- Initial release

## Questions?

File a [GitHub issue](https://github.com/ajpalok/tailsite/issues/new) please.

## Author

[Abrar Jahin](https://2haas.com/)

## License

*Tailsite Template* is available under the [GPL-2.0 License](https://github.com/ajpalok/tailsite-host/blob/main/LICENSE). See the [LICENSE](https://github.com/ajpalok/tailsite/blob/master/LICENSE) file for more info.
