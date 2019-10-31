(function(exports) {
  function NoteController(noteListView = new NoteListView(new NoteList)) {
    noteListView.newNote("Favourite drink: seltzer");
    this.noteListView = noteListView;
  }

  NoteController.prototype.refreshNotes = function() {
    var element = document.getElementById("app")
    element.innerHTML = this.noteListView.convertHTML();
  }

  NoteController.prototype.newNote = function(text) {
    this.noteListView.newNote(text);
  };

  noteController = new NoteController();
  noteController.refreshNotes();
  exports.NoteController = NoteController;
})(this)
