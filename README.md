# How to use Optical Illusions to Illustrate Mathematical and Coding Concepts

## Awknowledgement

The optical illusions are recreated from [the work of Akiyoshi Kitaoka](https://www.ritsumei.ac.jp/~akitaoka/index-e.html).

## The Illusions

**WARNING - Some of these illusions may cause motion sickness.  If you feel dizzy please navigate away. One of the illusions below have a "strobe light" like effect and have been marked as such in the description.**

The following are some optical illusions that can be relatively easily recreated

* [slants](https://illusions-2025.github.io/illusions-2025/slants.html) - horizontal lines of circles appears to be slanted
* [bulge](https://illusions-2025.github.io/illusions-2025/bulge.html) - a set of squares appear to have a bulge in the middle
* [wave](https://illusions-2025.github.io/illusions-2025/wave.html) - a 2D grid appears to be waving
* [reverse-phi](https://illusions-2025.github.io/illusions-2025/reverse-phi.html) - **WARNING, has a bit of a strobe light** a ring of ovals appear to rotate

## Why these?

* Each illusion was chosen for its simplicity in geometric form.  They have easy to draw components (rectangles circles and triangles for the most aprt) 
* Illusions that involve using a photo or image can be harder to render locally due to cross origin policies on browsers.  Thus only illusions that can be drawn entirely through code were chosen for easy rendering. Something to keep in mind if you want to adapt other illusions

## p5.js

[p5.js](https://p5js.org) is JavaScript version of the Processing and one of the big advantages is that p5.js sketches works natively on the web!  Your students can show case their work on their own web pages without alteration.

While this particular talk uses p5.js, the methodology can be adapted to use other members of the [processing family](https://processing.org).  Thus if you happen to teach Python or Java, you can adapt these to use processing.py or processing.

## Recreating your own Illusions:

[Start here to get your starter code](https://classroom.github.com/a/rdVTTHqT)

### Option A: Work in the browser, 

#### Advantage:
* no need to install software
* this is great for chromebooks or when you don't have access to a good editor.

#### Disadvantage
* your editor is only what github provides as its two editors... tooling is limited
* a bit slow from time you save your code till publish becomes live

#### Steps:

* Turn on github pages. Written details here: https://github.com/cemc-ghpages/cemc-2024
* Use the pencil icon to edit your code (note that pencil icon allows you to choose the plain editor or the vs code like editor...its not full vs.

### Work offline on your own computer

#### Advantage:
* a familiar editor/IDE environment
* Quick turn around from saving file to seeing results (just point your browser at your html file)

#### Disadvantage
* no publishing unless you push your code back into your repo and setup github pages

#### Steps:
* clone this repo (or just download it)
* unzip if needed, then open editor/browser to the appropriate files.


## Delivering this workshop with your students:

### Option A: Just use this repo

Just provide them with the URL to this page ...

#### Advantage:
* easy... no setup

#### Disadvantage
* all work will be created in this organization and it will be public. (note that unless you update your org you would need the repos to be public to use github pages)... and it will be in an org that you don't have access to directly for settings control
* all of these instructions are going to be here... so that might get confusing for your students.

### Option B: Duplicate and edit your own version!

1. Create a github organization
2. Duplicate this repo and the starter file repos:
  * Go to: https://github.com/illusions-2025/illusions-2025/ and click on the "use this template" button on the top right of the page to create a new repo in the github organization you just made
  * Go to https://github.com/illusions-2025/demotemplate and click on the "use this template" button on the top right of the page to create a second repo containing the demostarter code that you can give to your students
3. Change settings in the demotemplate under your organization so that it becomes a template.  Note that this will need to be public if you do not want to manage access
4. **OPTIONAL**: Set up an assignment creation link using github classroom.  Details can be found here https://seneca-ictoer.github.io/githubteachingtools/
5. Edit the README.md file in first repo.
  * If you created a classroom link change the url on line 31 to use the classsroom link, then erase all lines after that (these instructions)
  * If you did not create a link erase all lines starting at line 29.  Provide a link to your demotemplate and just tell students to use the "use this template" button to make their copy of the starter files into their own account.





