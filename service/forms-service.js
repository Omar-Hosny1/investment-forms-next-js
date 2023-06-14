export async function getForms() {
  try {
    const res = await fetch(
      "https://task-5fac2-default-rtdb.firebaseio.com/forms.json",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const incomingData = await res.json();
    console.log(incomingData);
    return incomingData;
  } catch (error) {
    throw error;
    // console.error("Error fetching forms:", error);
    // return [];
  }
}
export async function addForm(formData) {
  try {
    const res = await fetch(
      "https://task-5fac2-default-rtdb.firebaseio.com/forms.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    const newForm = await res.json();
    return newForm;
  } catch (error) {
    console.error("Error adding form:", error);
    return null;
  }
}

export async function removeForm(formId) {
  try {
    const res = await fetch(
      `https://task-5fac2-default-rtdb.firebaseio.com/forms/${formId}.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    const deletedForm = await res.json();
    return deletedForm;
  } catch (error) {
    console.error("Error removing form:", error);
    return null;
  }
}

export async function updateForm(formId, formData) {
  try {
    const res = await fetch(
      `https://task-5fac2-default-rtdb.firebaseio.com/forms/${formId}.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    const updatedForm = await res.json();
    return updatedForm;
  } catch (error) {
    console.error("Error updating form:", error);
    return null;
  }
}
