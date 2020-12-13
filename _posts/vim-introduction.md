---
title: 'vim: the introduction'
excerpt: 'I started using vim because I was using a really old computer at the time and Microsoft word took excruciating minutes to open, note (macOS software) took too long too and both were soo heavy and were lagging my computer...'
coverImage: '/assets/blog/vim-the-introduction/vim.png'
date: '2019-09-12T05:35:07.322Z'
author:
  name: Fernanda Penna
  picture: '/assets/blog/vim-the-introduction/sherlock100.gif'
ogImage:
  url: '/assets/blog/vim-the-introduction/vim.png'
---


# What's vim?

Vim is a text editor created in 1993 based on an older text editor from the 80 's called vi. But it's best known as the text editor from where you cannot quit. 

[Here some memes about it- in case you didn't know](link:https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/) : https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/




## My story with vim 

I started using vim because I was using a really old computer at the time and Microsoft word took excruciating minutes to open, note (macOS software) took too long too and both were soo heavy and were lagging my computer so much that sometimes I just wanted to take a quick note or write down a task to do later but It has so much friction around this that I started using pen and paper or just forgetting my task... Then I discover vim, nano and emacs (thanks to memes). Nano is easier and emacs is more configurable and has a huge amount of features but I just fell in love with vim and its powerful commands and workflow, even tho I didn't know any of them and the documentation was like ancient greek to me.

I started watching thousand of vim's tutorial on youtube and reading everything I found on internet hopping that something could help me understand what the documentation was trying to say. Spoiler alert! Most of them teach you the same thing over and over and that part is the easiest part( movement, change text, copy and paste) and I wanted to understand mapping, <leader>, buffers, vimscript, what the hell was a .vimrc and where it was on my computer.
Remembering this right now makes me laugh so much, mainly because to have a .vimrc you need to create this (that's why I never fount it!!!), so here's my first help:
- go to your home folder (on terminal type: cd ~/)
- now type:
```vim
$ vim .vimrc
```
Now you type :w (to save it) and congratulations, now you have a .vimrc.

## The reason I'm writing this

This introduction it's not to teach you the basics of vim, as I said before there's thousand of vim tutorials doing that already and you also have vim tutor (yes, vim provides you a tutorial!), just go to your terminal and write:
```bash=
$ vimtutor
```
>By the way, the lesson 1.2 teaches you how to quit vim ;) you're wecolme

I'm here to talk about what makes vim so special to me and why I do not recommend you to just download a .vimrc file from someone else (specifically if you dont know what a .vimrc is for - gonna talk about this in another post, I promise) or install all the top 10 must have vim plugins. Because first you need to know what you're doing, how you can improve your workflow (and that's why you just can't simply download another's person .vimrc file, because different people have different priorities, work with different programming languages, etc), and you need to know that vim has modes! The reasons people dont know how to quit vim it's because people dont know what they're doing... people just start vim (sometimes by mistake), try to type stuffs, nothig happens and then suddenly start to write stuffs (if you randomly start to type your keyboard anytime soon you're going to enter the insert mode, trust me LOL) and once in insert mode you can't quit typing!! Unless you type control-c by mistake and then :q (odds are really low, right? 

<figure>
  <img src="/img/vim-the-introduction/vim.png" alt="my text"/>
  <figcaption>Trying quit vim.</figcaption>
</figure>

<br>

You need to <esc>, this key puts you back to normal mode (like control-c) and then :quit (or :q, :wq if you want to save before quit)

## Vim modes:

Vim has [six basic modes]("http://vimdoc.sourceforge.net/htmldoc/intro.html#vim-modes-intro"), but the important ones are normal mode, visual mode and insert mode. And in each mode you have specific commands. You must be thinking DUHHHH no shit Sherlock! But I took too long to realize that "i" in visual mode wasnt the same "i" that I type in normal mode to enter in insert mode. But means instead inner! So in visual mode (type "v" in normal mode - you basically can highlight areas with the movement commands) the command "viw" did not mean "visual mode" + insert mode + write "w" (as I though and didnt understant why that didnt happen) but instead it highlight a word in which your cursor is on (meaning visual inner word). If you already knew that congratulations, I didn't and the documentation it's not very noob friendly to be honest.
So, after almost a year using vim, I've learned some stuff that I wish someone could have teach me (or maybe that I could have understant that just reading the documentation), vim helped me being a better programmer forcing me to search, by try harder and now I can show you how is done and help clear your path to use vim like a pro (and build your own .vimrc too). 



<figure>
  <img src="/img/vim-the-introduction/sherlock100.gif" alt="my text" style="width: 300px; margin: 50px auto 20px; display: block"/>
  <figcaption style="text-align: center">Past me looking for my .vimrc file in my computer.</figcaption>
</figure>

<br>
<br>

**Here are some basic commands you can begin with:**


- http://vimdoc.sourceforge.net/htmldoc/intro.html#vim-modes-intro
- vim cheat sheet : https://github.com/substack/fmmn/blob/master/day1/vim.md
- Practical Vim: Modes: https://fzheng.me/2018/03/17/practical-vim-modes/#chap-1---the-vim-way