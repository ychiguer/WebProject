function ScrollToTop() {
  const history = useHistory()
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (action !== 'POP') {
        window.scrollTo(0, 0)
      }
    })
    return () => unlisten()
  }, [])
  return (null)
}