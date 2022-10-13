export const styles = {
  container: {
    alignItems: 'center',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(3, 100px)',
    margin: '1rem',
  },
  button: {
    background: '#878787',
    border: 'none',
    borderRadius: '25px',
    color: '#FFF',
    fontWeight: 'bold',
    padding: '8px 24px',
  },
};
