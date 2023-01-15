import React from 'react'

export default function Szűrő(props) { 
  const [elrejtKihúzott, setElrejtKihúzott] = React.useState(false);
  function toggleElrejtKihúzott() {
    setElrejtKihúzott(oldValue => !oldValue);
  }
  React.useEffect(() => {
    props.toggleElrejtKihúzott(elrejtKihúzott);
  }, [elrejtKihúzott]);

  return (
    <section>
      <label>
        <input 
          type="checkbox" 
          name="kihúzottak_elrejtése" 
          checked={elrejtKihúzott}
          onClick={toggleElrejtKihúzott} />
        Kihúzottak elrejtése
      </label>
    </section>
  )
}
