function ToDoHero({ todos_completed, total_todos }) {
  return (
    <section>
      <div>
        {todos_completed == total_todos ? (
          <>
            <p>All tasks done! Keep it up.</p>
          </>
        ) : (
          <p>You still have {total_todos - todos_completed} tasks remaining.</p>
        )}
      </div>
      <div>
        {todos_completed} / {total_todos} Done
      </div>
    </section>
  );
}

export default ToDoHero;
