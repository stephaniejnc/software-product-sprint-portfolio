// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

// Get the elements with class="column" for images.html page
var elements = document.getElementsByClassName("column");
var i;

function addRandomFact() {
  const facts =
      ['is based in Vancouver, BC 🏔',
       'enjoys fencing, hiking, and skiing! 🤺',
       'is a logistics coordinator for nwPlus, home to the largest hackathon in Western Canada 👩🏻‍💻', 
       'has a goldendoodle named Luna! 🐶',
       'is passionate about empowering girls in tech ✨',
       'recently transferred to computer science 💻',
       'loves Studio Ghibli films and Joe Hisaishi pieces 🎶'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = fact;
}

function setImages() {
  // two images per row
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "15%";
  }
}
