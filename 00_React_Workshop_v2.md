<!-- 00_React_Workshop_v2.md -->
# React & REST API Workshop Part 2

## Let's POST Data to a Web Database From a React Component

Thank you for attending our 2nd **Kintone x React** workshop!  
Use the following files to follow along!

### Download Links
Click [**here**](https://gist.github.com/ahandsel/556e42aad59ff22604a9042174c556bc/archive/master.zip) or the ![Download Zip](https://user-images.githubusercontent.com/30670749/92357094-3e063e00-f122-11ea-8003-0307587e2c15.png) button on the upper right corner for all the code & slides you need for our workshop!

---

## Outline
  * [📎 PREREQUISITE](#-prerequisite)
    * [💾 Install Node & npm](#-install-node--npm)
    * [🕹️ Install a Sample React App](#️-install-a-sample-react-app)
    * [🚀 Getting your FREE Kintone Database](#-getting-your-free-kintone-database)
    * [📺 Quick Videos Going Over the Prep Work](#-quick-videos-going-over-the-prep-work)
  * [📚 Suggested Reading](#-suggested-reading)
  * [Details at dev.to](#details-at-devto)
  * [Overview of the Files](#overview-of-the-files)

---

## 📎 PREREQUISITE

### 💾 Install Node & npm
  * Node ≥ 10.16 and npm ≥ 5.6 are required for this workshop
  * Confused? 🤔 → Check out the [Video Guides](#-quick-videos-going-over-the-prep-work)

### 🕹️ Install a Sample React App
  * Create a `myproject` folder
  * We will be starting from the publicly available [sample React App](https://create-react-app.dev/).
  * Confused? 🤔 → Check out the [Video Guides](#-quick-videos-going-over-the-prep-work)

### 🚀 Getting your FREE Kintone Database

#### ① Sign-Up for Developer Program Account (Website) 🌐
  * [bit.ly/KDP_signup](https://bit.ly/KDP_signup)
    * ⚠ Do NOT use Safari
    * ⚡Accept Cookies First
    * ✅ Use Chrome & Firefox

#### ② THEN Create a Kintone Subdomain (Database) 📂
  * [bit.ly/K_DevLic](http://bit.ly/K_DevLic)
    * ⚡ Only use lowercase, numbers, & hyphens in your subdomain
    * ⚠ Do not use uppercase nor special characters

Confused? 🤔 → Check out the [Video Guides](#-quick-videos-going-over-the-prep-work)

---

### 📺 Quick Videos Going Over the Prep Work

| Install Node & Sample React App | Signing Up for Kintone |
| ------------------------------- | ---------------------- |
| [![https://youtu.be/4Kw-i_rX3tY](https://img.youtube.com/vi/4Kw-i_rX3tY/mq1.jpg)](https://youtu.be/4Kw-i_rX3tY)  <https://youtu.be/4Kw-i_rX3tY> | [![https://youtu.be/Gzz8SbTuoFg](https://img.youtube.com/vi/Gzz8SbTuoFg/mq1.jpg)](https://youtu.be/Gzz8SbTuoFg)  <https://youtu.be/Gzz8SbTuoFg> |

---

## 📚 Suggested Reading
We advise you to have a look through the following React documents beforehand:
1. [Hello World](https://reactjs.org/docs/hello-world.html)
2. [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
3. [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
4. [Components and Props](https://reactjs.org/docs/components-and-props.html)

## Details at [dev.to](https://dev.to/will_yama/series/11707)

[![React & REST API Series' Articles](https://user-images.githubusercontent.com/30670749/111263228-ddbffe00-8668-11eb-9550-f42944f45c76.png)](https://dev.to/will_yama/series/11707)

Check out Will's [React & REST API Series' Articles](https://dev.to/will_yama/series/11707) at [dev.to](https://dev.to/will_yama/series/11707) Community 👩‍💻👨‍💻!

---

## Overview of the Files

| File Name                | Description                                                                     | Tag          |
| ------------------------ | ------------------------------------------------------------------------------- | ------------ |
| [01_Prep.md](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-01_prep-md)               | Steps to install Node JS, create myproject folder, and install sample react app | Instructions |
| [02_Text_index.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-02_test_index-js)         | Simple JSX code                                                                 | Frontend     |
| [03_PromiseError_index.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-03_promiseerror_index-js) | Try to output an API response in React!                                         | Frontend     |
| [04_StateEffect_index.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-04_stateeffect_index-js)  | Successfully output the response in React!                                      | Frontend     |
| [05_ExpressServer.md](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-05_expressserver-md)      | Steps to setup Express Server                                                   | Instructions |
| [06_Kintone_server.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-06_kintone_server-js)     | Get Kintone data                                                                | Backend      |
| [07_Kintone_index.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-07_kintone_index-js)      | Output Backend's data in React                                                  | Frontend     |
| [08_Clean_server.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-08_clean_server-js)       | Add a Query Parameters                                                          | Backend      |
| [09_Clean_index.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-09_clean_index-js)        | Clean the data                                                                  | Frontend     |
| [10_POST_server.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-10_post_server-js)        | Add a new route for POST requests                                               | Backend      |
| [11_POST_index.js](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-11_post_index-js)         | Add a form to POST data                                                         | Frontend     |
