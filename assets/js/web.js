function gerarJsonYouTube() {

  const id = 1;
  const title = '';
  const instructor = '';
  const description = '';
  const category = '';
  const level = '';
  const date = '';
  const poster = 'https://img.youtube.com/vi/  /maxresdefault.jpg';
  const favorite = false;

  const playlistId = '';
  const nomeArquivo = 'arquivo.json';

  const videoIds = [];
  let nextPageToken = '';

  do {

    const playlistResponse = YouTube.PlaylistItems.list('snippet', {
      playlistId: playlistId,
      maxResults: 50,
      pageToken: nextPageToken
    });

    for (let i = 0; i < playlistResponse.items.length; i++) {

      const item = playlistResponse.items[i];
      const videoId = item.snippet.resourceId.videoId;

      if (videoId) {
        videoIds.push(videoId);
      }

    }

    nextPageToken = playlistResponse.nextPageToken;

  } while (nextPageToken);

  const lessons = videoIds.map(id => {

    let title = '';
    let duration = '00:00';

    try {

      const response = YouTube.Videos.list('snippet,contentDetails', {
        id: id
      });

      if (response.items && response.items.length > 0) {

        const item = response.items[0];

        title = item.snippet.title;
        duration = parseISO8601Duration(
          item.contentDetails.duration
        );

      }

    } catch (e) {

      Logger.log(
        'Erro ao buscar o vídeo ' +
        id +
        ': ' +
        e.toString()
      );

    }

    return {
      title: title,
      duration: duration,
      thumb: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      video: `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`
    };

  });

  const duration = somarDuracoes(lessons);

  const course = {
    id: id,
    title: title,
    instructor: instructor,
    description: description,
    category: category,
    level: level,
    date: date,
    poster: poster,
    duration: duration,
    favorite: favorite,
    lessons: lessons
  };

  const jsString = JSON.stringify(course, null, 4);

  DriveApp.createFile(
    nomeArquivo,
    jsString,
    MimeType.PLAIN_TEXT
  );
}

function somarDuracoes(lessons) {

  let totalSegundos = 0;

  lessons.forEach(lesson => {

    const partes = lesson.duration.split(':');

    if (partes.length === 2) {

      const minutos = parseInt(partes[0]) || 0;
      const segundos = parseInt(partes[1]) || 0;

      totalSegundos += (minutos * 60) + segundos;

    } else if (partes.length === 3) {

      const horas = parseInt(partes[0]) || 0;
      const minutos = parseInt(partes[1]) || 0;
      const segundos = parseInt(partes[2]) || 0;

      totalSegundos +=
        (horas * 3600) +
        (minutos * 60) +
        segundos;

    }

  });

  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);

  if (horas > 0) {
    return `${horas}h ${minutos}m`;
  }

  return `${minutos}m`;
}

function parseISO8601Duration(durationStr) {

  const match = durationStr.match(
    /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/
  );

  if (!match) {
    return '00:00';
  }

  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;

  if (hours > 0) {

    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  }

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}