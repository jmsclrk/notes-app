(function(exports) {
  function convertsToStaticHTMLMultiNotes() {
    var noteListView = new NoteListView();
    noteListView.noteList.newNote("note 1");
    noteListView.noteList.newNote("note 2");
    var staticHTML = "<ul><li><div>note 1</div></li><li><div>note 2</div></li></ul>"
    assert.isTrue(noteListView.convertHTML() === staticHTML, "convertsToStaticHTML");
  };

  function instantiationCreatesNoteListModelVariable() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.noteList instanceof NoteList, "instantiationCreatesNoteListModelVariable");
  };

  function convertsToStaticHTMLSingleNote() {
    var noteListView = new NoteListView();
    noteListView.noteList.newNote("note 1");
    var staticHTML = "<ul><li><div>note 1</div></li></ul>"
    assert.isTrue(noteListView.convertHTML() === staticHTML, "convertsToStaticHTML");
  };

  function convertsToStaticHTMLNoNotes() {
    var noteListView = new NoteListView();
    var staticHTML = "<ul><li><div></div></li></ul>"
    assert.isTrue(noteListView.convertHTML() === staticHTML, "convertsToStaticHTML");
  };

  convertsToStaticHTMLNoNotes();
  convertsToStaticHTMLSingleNote();
  convertsToStaticHTMLMultiNotes();
  instantiationCreatesNoteListModelVariable();
})(this);