import { toast } from "react-toastify";

export async function validateAndGenerateTodos(goal) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text:
              `I want you to act as a goal validation assistant and action plan creator. 
              
              Analyze this goal: "${goal}"
              
              First, determine if this is a valid goal that could reasonably be broken down into action steps. 
              Consider these criteria:
              - Is it specific enough to act upon?
              - Is it something a person could realistically work towards?
              - Is it ethical and legal?
              
              Then, respond in this EXACT JSON format:
              {
                "isValidGoal": true/false,
                "reason": "Brief explanation of why this is/isn't a valid goal",
                "todos": ["Actionable step 1", "Actionable step 2", "Actionable step 3", etc.]
              }
              
              If isValidGoal is false, only include isValidGoal and reason fields.
              If isValidGoal is true, include 5-10 specific, actionable todos that would help achieve this goal.
              Make each todo specific, actionable, and include enough detail to get started.
              
              Return ONLY the JSON with no additional text or explanations.`
          }]
        }],
         generationConfig: {
          temperature: 0.2,
          topK: 32,
          topP: 1,
          maxOutputTokens: 1024
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to process your goal');
    }

    const data = await response.json();
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response from AI model');
    }

    const textContent = data.candidates[0].content.parts[0].text;
    
    // Extract the JSON from the response
    const jsonMatch = textContent.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response');
    }
    
    const parsed = JSON.parse(jsonMatch[0]);
    return parsed;

  } catch (error) {
    console.error('Error processing goal:', error);
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error('Failed to process your goal. Please try again.');
    }
    return null;
  }
}

export const formatTodos = (todos) => {
  return todos.map((todo, index) => ({
    id: `todo-${Date.now()}-${index}`,
    text: todo,
    completed: false
  }));
};