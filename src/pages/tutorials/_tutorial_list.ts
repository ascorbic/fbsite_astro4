
export const allTutorialsSeries = [
  
  { 
    id: 1,
    image: 'image.png',
    title: 'Angular Tutorial <br /> for absolute beginners',
    wip: false,
    difficulty: 1,
    tags: ['Angular', 'TypeScript'],
    description: `
    <div class="text-xl">
      Have you never used Angular first? <br /> This tutorial is the tutorial to start from  
    </div>
    `,
    slug: 'angular/angular-basics',
    firstPost: 'tutorials/angular/angular-basics/1-angular-hello-world'
  },
  { 
    id: 2,
    image: 'image.png',
    wip: false,
    title: 'Create a simple Crud application in Angular 15',
    difficulty: 2,
    tags: ['Angular', 'TypeScript', 'RxJS'],
    description: `
    <div class="text-xl">
       This step-by-step tutorial explains how to create a simple CRUD application from scratch using some of the fundamentals concepts of the framework 
    </div>
    <!--
    <ul> 
      <li>• Create Custom Types in TypeScript</li>  
      <li>• Build-In Directives: \`ngFor\`, 'ngClass', 'ngIf'</li> 
      <li>• Work with Template Driven Forms and validations</li> 
      <li>• Dependency Injection</li> 
      <li>• Server Side Communication</li> 
    </ul>
    -->
    `,
    slug: 'angular/simple-crud-in-angular',
    firstPost: 'tutorials/angular/simple-crud-in-angular/1-create-an-angular-project'
  },

  { 
    id: 3,
    image: 'image.png',
    title: 'Create an Angular 15 Application with ngModules and nested routes',
    difficulty: 3,
    tags: ['Angular', 'TypeScript'],
    description: `
    <div class="text-xl">
       Create a multiview application with custom <code>ngModules</code> (core, features and shared), lazy loading and nested routes
    </div>
    `,
    slug: 'angular/angular-ng-modules-and-router',
    firstPost: 'tutorials/angular/angular-ng-modules-and-router/1-create-the-project'
  },
  {
    id: 4,
    image: 'image.png',
    title: 'Create a Project with Standalone Components and Routing',
    difficulty: 2,
    tags: ['Angular', 'TypeScript'],
    description: `
    <div class="text-xl">
       This step-by-step tutorial explains how to create a simple Angular (v.15) standalone application with router and lazy loading
    </div>
    `,
    slug: 'angular/angular-standalone-apps',
    firstPost: 'tutorials/angular/angular-standalone-apps'
  },
  { 
    id: 5,
    image: 'image.png',
    title: "React, TypeScript and Vitest: write your first test",
    //wip: false,
    difficulty: 3,
    tags: ['React', 'TypeScript'],
    description: `
    <div class="text-xl">
      Install and configure Vite, ViteJS and run your first tests in React / TypeScript applications
    </div>
    `,
    slug: 'react/vite-and-vitest',
    firstPost: 'tutorials/react/vite-and-vitest/1-react-vite-and-typescript'
  },
  // { 
  //   id: 3,
  //   image: 'image.png',
  //   difficulty: 1,
  //   wip: true,
  //   title: 'JavaScript Tips <br />for Front-End<br /> Developers',
  //   tags: ['JavaScript', 'TypeScript'],
  //   description: `
  //   <div class="text-xl">
  //   In this series you will explore the JavaScript features (especially ES6+) that you need the concepts to learn to make the most of modern frameworks.
  //   </div>
  //   `,
  //   slug: 'javascript/js-for-frontend-developers',
  //   firstPost: '/tutorials/javascript/js-for-frontend-developers/1-introduction'
  // }
]
