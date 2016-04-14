For a full list of my projects, see my [github](http://github.com/geezhawk/). To hear me rant about
the technical snags I'm struggling with at the moment, see my [twitter](https://twitter.com/Geezhawk).

[Flighthound](https://github.com/geezhawk/flighthound)
------------------------------------------------------
A single-page application built with Django Rest Framework and React that allows users to create flight price alerts and emails them when the price of a flight drops below the price they've set. Features live updates, a management command to get pricing from the QPX cheap flights API, and a user authentication system that uses `react-router`. 

[Sun Never Sets on Us](https://github.com/geezhawk/django-imprecise-location-sharing)
---------------------------
An imprecise location sharing app built with Django that allows users to share which city they're in with friends,
and sends them weekly email updates about where their friend group has moved. It's linked to a [chrome
extension](https://github.com/geezhawk/location-sharing-extension) that gets the user's location with the HTML5 navigator API, and uses Google's reverse-geocoding API to find the city name. The app features a system for creating "friendships" between users, and sends friend requests via AJAX without a page refresh. 

[Wikipedia Hummingbird](https://github.com/geezhawk/wikipedia-hummingbird)
-------------
A chrome extension that pulls data from Wikipedia. The user highlights a term, hits a keyboard
shortcut, and the extension pops up a modal with the first paragraph of the first article on that
subject from the Wikipedia search results, as well as a link to the full article. 

[Django Adventure](https://github.com/geezhawk/django-adventure)
-------
A simple framework for building adventure games with Django. 

[Three Digit](https://github.com/geezhawk/django-view-tracker)
----
An app that scrapes story view counts from khmertimeskh.com and uses the data to track reporters'
views. It uses pattern-matching to get story urls from the front page, and parses each story for the
reporter's name, headline, and view count. The data is served from a Django Rest Framework backend
and displayed by a ReactJS frontend. 

Maps
---
Gotta love maps. I used CartoDB to create a map of [all the drunk driving arrests in the city
of Charlotte](http://citoyen0.cartodb.com/viz/304d1974-bfc2-11e4-a829-0e0c41326911/public_map) in 2013/4, using data I obtained from the police department and cleaned using
OpenRefine. I also made a map of [which countries the most popular TV shows in Cambodia come from](https://citoyen0.cartodb.com/viz/b78bde9e-59e5-11e5-9ac6-0e8dde98a187/public_map), as well as an interactive LeafletJS map plotting the [health inspection scores of more than 4,000 restaurants in Austin, TX](http://geezhawk.github.io/austin-restaurant-scores). 
