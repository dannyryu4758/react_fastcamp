import React, { useState, useRef } from 'react'

export default function UncontrolledComponent() {
    const fileInputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + fileInputRef.current.files[0].name);
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={fileInputRef} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
}
