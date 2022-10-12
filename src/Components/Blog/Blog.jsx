import React from "react";

const Blog = () => {
  return (
    <div className="my-10 mx-20">
      <h1 className="font-semibold text-3xl text-center text-purple-400">
        Question & Answer Section
      </h1>
      <div className="question_one rounded border border-purple-400 mt-10 p-10">
        <h1 className="text-xl mb-5 font-bold">
          Q: What is the Purpose of react router?
        </h1>
        <p>
          <span className="font-bold">Ans:</span> ReactJS Router is mainly used
          for developing Single Page Web Applications. React Router is used to
          define multiple routes in the application. When a user types a
          specific URL into the browser, and if this URL path matches any
          'route' inside the router file, the user will be redirected to that
          particular route. <br /> it is a standard library for routing in
          React. It enables the navigation among views of various components in
          a React Application, allows changing the browser URL, and keeps the UI
          in sync with the URL.
        </p>
      </div>

      <div className="question_one rounded border border-purple-400 mt-10 p-10">
        <h1 className="text-xl mb-5 font-bold">
          Q: How does Context Api Work ?
        </h1>
        <p>
          <span className="font-bold">Ans:</span> Context provides a way to pass
          data through the component tree without having to pass props down
          manually at every level. In a typical React application, data is
          passed top-down (parent to child) via props, but such usage can be
          cumbersome for certain types of props (e.g. locale preference, UI
          theme) that are required by many components within an application.
          Context provides a way to share values like these between components
          without having to explicitly pass a prop through every level of the
          tree. <br />
          Creates a Context object. When React renders a component that
          subscribes to this Context object it will read the current context
          value from the closest matching Provider above it in the tree. The
          defaultValue argument is only used when a component does not have a
          matching Provider above it in the tree. This default value can be
          helpful for testing components in isolation without wrapping them.
        </p>
      </div>

      <div className="question_one rounded border border-purple-400 mt-10 p-10">
        <h1 className="text-xl mb-5 font-bold">Q: What is useRef hook ?</h1>
        <p>
          <span className="font-bold">Ans:</span> The useRef Hook allows us to
          persist values between renders. It can be used to store a mutable
          value that does not cause a re-render when updated. It can be used to
          access a DOM element directly. <br />
          useRef is like a “box” that can hold a mutable value in its .current
          property. we might be familiar with refs primarily as a way to access
          the DOM. If we pass a ref object to React with React will set it's
          .current property to the corresponding DOM node whenever that node
          changes. <br />
          However, useRef() is useful for more than the ref attribute. Its handy
          for keeping any mutable value around similar to how we'd use instance
          fields in classes.
        </p>
      </div>
    </div>
  );
};

export default Blog;
