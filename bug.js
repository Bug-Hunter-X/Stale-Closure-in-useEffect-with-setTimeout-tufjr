useEffect(() => {
  // Incorrectly setting state within a timeout
  setTimeout(() => {
    setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
  }, 1000);
}, []);