<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<div align="center">
  
<a href="">[![Contributors][contributors-shield]][contributors-url]</a>
<a href="">[![Forks][forks-shield]][forks-url]</a>
<a href="">[![Stargazers][stars-shield]][stars-url]</a>
<a href="">[![Issues][issues-shield]][issues-url]</a>
<a href="">[![MIT License][license-shield]][license-url]</a>

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/emrlk/ReasonED">
    <img src="https://github.com/emrlk/ReasonED/blob/main/client/reasoned-app/public/ReasonEDLogo.svg" alt="Logo" width="75%" height="75%">
  </a>
  <h2 align="center">
    A logical fallacy game-based learning site.
    <br />
    <br />
    <a href="https://reasoned.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/emrlk/ReasonED/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/emrlk/ReasonED/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
    ·
    <a href="https://github.com/emrlk/ReasonED">Explore Docs</a>
  </h2>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-reasoned">About ReasonED</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-as-a-contributor">Getting Started as a Contributer</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About ReasonED

[![ReasonED Screenshot][product-screenshot]](https://reasoned.vercel.app/)

Originally a capstone project by students at Old Dominion University, ReasonED is an open-source game-based learning website that improves the ability of users to identify logical fallacies through engaging video games. Games will be curated for elementary, middle, and high school students respectively to support continuous learning over all grade levels. Our goal is to help educators cultivate their student’s critical reasoning skills over the long term and beyond the scope of a single subject.

ReasonED games all share the same goal of introducing and improving logical fallacy identification skills, but the difficulties and approaches vary depending on the age group. While the concepts and scenarios will be simplified for younger ages, the games aim to plant the seeds of critical thinking and encourage kids to recognize flawed reasoning. Many of the games involve logical fallacies personified as fun characters. The fallacy characters can serve as memorable guides in students’ fallacy education journeys.

ReasonED resources can supplement traditional classroom learning, offering an interactive and gamified approach to enhance critical reasoning skills, or be used as a standalone resource to introduce logical fallacies in places where such curriculum may be lacking. Because ReasonED is a website, once it is whitelisted on school networks, students can access it in their free time during school.

### The "Why?"
In this digital era of the information age, the need for strong critical thinking skills is at an all-time high. The ease of viewing and sharing digital information has made us more vulnerable than ever to misinformation and disinformation. While Big Tech companies have started incorporating fact-checking systems into their platforms, flawed information is not the only way we can be misled online. With the growth of opinion content across the web has come a growth in the use of flawed reasoning, or logical fallacies. Britannica defines a logical fallacy as "erroneous reasoning that has the appearance of soundness".

People use fallacies in their arguments, both accidentally and intentionally, to try to assert their points, but do so by misstating facts, misusing terms, or using an improper process of inference (Britannica). Logical fallacies are not typically "black-and-white" claims of fact. Thus, they often slip through the cracks of fact-checking systems and are free to float around online. Making matters worse, social media sites employ algorithms that curate our feeds to only show us what we want to see. This process often results in filtering out content that is not in support of our own beliefs and interests, exploiting our confirmation bias, and creating personal echo chambers we may not even realize.

Since fallacies are manipulative, yet go unchecked on a very opinionated internet, it is solely up to users to recognize faulty logic in the content they encounter.

To navigate the internet mindfully and distinguish manipulative reasoning from genuine reasoning, we must have a working knowledge of logical fallacies and adequate skills to identify them.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![PostgreSQL][postgresql]][postgresql-url]
* [![Tailwind CSS][tailwind]][tailwind-url]
* [![Vercel][vercel]][vercel-url]
* [![Godot][godot]][godot-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
# Getting Started as a Contributor

### 1. Ensure [Node.js](https://nodejs.org/en) is installed.
  `node -v` should return a version number if it is.



### 2. Clone the Repo.
   ```sh
   git clone https://github.com/emrlk/ReasonED.git
   ```



### 3. In the project root, run
   ```sh
   npm install
   ```


### 4. To Contribute to one of the Games, Install Godot Engine .NET 3.6
  * [Download for Windows](https://github.com/godotengine/godot/releases/download/3.6-stable/Godot_v3.6-stable_mono_win64.zip)
  * [Download for Linux](https://github.com/godotengine/godot/releases/download/3.6-stable/Godot_v3.6-stable_mono_x11_64.zip)
  * [Download for MacOS](https://github.com/godotengine/godot/releases/download/3.6-stable/Godot_v3.6-stable_mono_osx.universal.zip)

  In Godot:
  * Click `Import` > `Browse`
  * Navigate to this-repos-folder/games
  * Navigate into the folder of a game
  * Highlight the game's `project.godot` file and click `Open`
  * Click `Import and Edit`
<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- ROADMAP -->
# Roadmap

- [ ] More levels to straw manny, debug, and optimize for HTML5
- [ ] Working account creation
- [ ] Leaderboards
- [ ] More educator resources
 

See the [open issues](https://github.com/emrlk/ReasonED/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
# Contributing

Contributions make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
# License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
# Contact

Email  - reasoned411@gmail.com

Project Link: [https://github.com/emrlk/ReasonED](https://github.com/emrlk/ReasonED)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
# Acknowledgments

### Original Contributors
Initial prototype contributors from the ODU Spring 2024 semester:
* [![emrlk][emrlk]][emrlk-url]
* [![amorg025][amorg025]][amorg025-url]
* [![DakotaDawe][DakotaDawe]][DakotaDawe-url]
* [![junet306][junet306]][junet306-url]
* [![dcies002][dcies002]][dcies002-url]
* [![NolanMarch][NolanMarch]][NolanMarch-url]
* [![areebn7][areebn7]][areebn7-url]



### Old Dominion University Department of Computer Science
* Thank you to the [ODU CS](https://www.odu.edu/computer-science) faculty for mentoring the prototype design/development of this project and providing feedback.
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/emrlk/ReasonED.svg?style=for-the-badge&labelColor=541690&color=541690
[contributors-url]: https://github.com/emrlk/ReasonED/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/emrlk/ReasonED.svg?style=for-the-badge&labelColor=FF4949&color=FF4949
[forks-url]: https://github.com/emrlk/ReasonED/network/members
[godot]: https://img.shields.io/badge/Godot-3?style=for-the-badge&logo=godot-engine&logoColor=white&labelColor=478CBF&color=478CBF
[godot-url]: https://godotengine.org/download/3.x/windows/
[stars-shield]: https://img.shields.io/github/stars/emrlk/ReasonED.svg?style=for-the-badge&labelColor=FF8D29&color=FF8D29
[stars-url]: https://github.com/emrlk/ReasonED/stargazers
[issues-shield]: https://img.shields.io/github/issues/emrlk/ReasonED?style=for-the-badge&labelColor=FFCD38&color=FFCD38
[issues-url]: https://github.com/emrlk/ReasonED/issues
[license-shield]: https://img.shields.io/github/license/emrlk/ReasonED.svg?style=for-the-badge&labelColor=3b82f6&color=3b82f6
[license-url]: https://github.com/emrlk/ReasonED/blob/master/LICENSE.txt
[linkedin-url]: https://linkedin.com/in/emily-louk
[product-screenshot]: https://github.com/emrlk/ReasonED/blob/main/misc/ReasonED-README-screenshot.PNG
[Postgresql]:https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[Postgresql-url]: https://www.postgresql.org/about/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[tailwind]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[tailwind-url]: https://tailwindcss.com/
[vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[vercel-url]: https://vercel.com/home

[emrlk]: https://img.shields.io/badge/emrlk-%20?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=541690&color=541690
[emrlk-url]: https://github.com/emrlk
[amorg025]: https://img.shields.io/badge/amorg025-%20?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=541690&color=541690
[amorg025-url]: https://github.com/amorg025
[DakotaDawe]: https://img.shields.io/badge/DakotaDawe-%20?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=541690&color=541690
[DakotaDawe-url]: https://github.com/DakotaDawe
[junet306]: https://img.shields.io/badge/junet306-%20?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=541690&color=541690
[junet306-url]: https://github.com/junet306
[junet306]: https://img.shields.io/badge/junet306-%20?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=541690&color=541690
[junet306-url]: https://github.com/junet306
[dcies002]: https://img.shields.io/badge/dcies002-%20?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=541690&color=541690
[dcies002-url]: https://github.com/dcies002
[NolanMarch]: https://img.shields.io/badge/NolanMarch-%20?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=541690&color=541690
[NolanMarch-url]: https://github.com/NolanMarch
[areebn7]: https://img.shields.io/badge/areebn7-%20?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=541690&color=541690
[areebn7-url]: https://github.com/areebn7
