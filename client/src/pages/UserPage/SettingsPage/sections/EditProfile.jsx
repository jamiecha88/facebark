import React, { useState, useEffect } from "react";

const EditProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [ownerName, setOwnerName] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogBirthday, setDogBirthday] = useState(""); //include age?
  const [dogGender, setDogGender] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const MAX_OPTIONS = 5;

  const handleOptionChange = (event) => {
    const selectedValues = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value)
      .sort();

    if (selectedValues.length <= MAX_OPTIONS) {
      setSelectedOptions(selectedValues);
    }
  };

  const MAX_BIO_LENGTH = 200;

  const handleBioChange = (event) => {
    const inputBio = event.target.value.slice(0, MAX_BIO_LENGTH);
    setBio(inputBio);
    setHasUnsavedChanges(true);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);

  const handleSave = () => {
    // Save the updated profile data to the server
    // Reset the editing state and update the profile data
    setIsEditing(false);
    setHasUnsavedChanges(false);
  };

  return (
    <div>
      <h1>Profile</h1>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <input
            type="text"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
          />
          <input
            type="text"
            value={dogBreed}
            onChange={(e) => setDogBreed(e.target.value)}
          />
          <input
            type="text"
            value={dogGender}
            onChange={(e) => setDogGender(e.target.value)}
          />
          <input
            type="text"
            value={dogBirthday}
            onChange={(e) => setDogBirthday(e.target.value)}
          />
          <label htmlFor="personality">Dog Personality:</label>
          <select
            id="personality"
            multiple
            value={selectedOptions}
            onChange={handleOptionChange}
          >
            <option value="energetic">Energetic</option>
            <option value="shy">Shy</option>
            <option value="nervous">Nervous</option>
            <option value="cautious">Cautious</option>
            <option value="affectionate">Affectionate</option>
            <option value="barker">Barker</option>
            <option value="calm">Calm</option>
            <option value="chewer">Chewer</option>
            <option value="smart">Smart</option>
            <option value="gentle">Gentle</option>
            <option value="protective">Protective</option>
            <option value="playful">Playful</option>
            <option value="runner">Runner</option>
            <option value="wrestler">Wrestler</option>
            <option value="foodie">Foodie</option>
          </select>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <textarea
            value={bio}
            onChange={handleBioChange}
            placeholder="Enter a short description or bio your dog"
          />
          <p>{bio.length}/{MAX_BIO_LENGTH} characters</p>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {dogName}</p>
          <p>Dog Bio: {bio}</p>
          <p>Birthday: {dogBirthday}</p>
          <p>Location: {location}</p>
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default EditProfilePage;