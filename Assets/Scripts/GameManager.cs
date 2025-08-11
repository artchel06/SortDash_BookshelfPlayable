using System.Collections;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameObject endPanel;
    public bool end;
    public GameObject hand;
    public bool enableSound;
    public StartClickHandler startClickHandler;
    public GameObject Tray;
    public int level;
    public float[] trayPos;
    public int childPos;
    public GameObject secondParent;
    public bool trayFull = false;
    public int delay = 1;
    public DropZone zone;
    public int bookInTray;
    public int bookInTray2;
    public bool notFull;
    public bool bookDividePlace = false;

    public enum GameState { MainMenu, Playing, Paused, GameOver }
    public GameState CurrentState { get; private set; }
    public int currentScore;
    public int CurrentScore {
        get { return currentScore; }
        set {
            currentScore = value;
        }
    }

    private void Awake()
    {
        // Singleton setup
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
    private void Start()
    {
        ChangeState(GameState.MainMenu);
        TaskManager.Instance.RunUntil(() => level == 1, () => Tray.transform.DOLocalMove(new Vector3(trayPos[level - 1],0f,0f), 1f).SetEase(Ease.InOutBack));
        TaskManager.Instance.RunUntil(() => level == 2, () => Tray.transform.DOLocalMove(new Vector3(trayPos[level - 1], 0f, 0f), 1f).SetEase(Ease.InOutBack));
        TaskManager.Instance.RunUntil(() => level == 3, () => Tray.transform.DOLocalMove(new Vector3(trayPos[level - 1], 0f, 0f), 1f).SetEase(Ease.InOutBack));
        TaskManager.Instance.RunUntil(() => level == 4, () => Tray.transform.DOLocalMove(new Vector3(trayPos[level - 1], 0f, 0f), 1f).SetEase(Ease.InOutBack));
        TaskManager.Instance.RunUntil(() => level == 5, () => Tray.transform.DOLocalMove(new Vector3(trayPos[level - 1], 0f, 0f), 1f).SetEase(Ease.InOutBack));
        level = 1;
    }

    public IEnumerator Win()
    {
        yield return new WaitForSeconds(1);
        endPanel.SetActive(true);
        end = true;
    }

    private IEnumerator DestroyHandObj()
    {
        yield return new WaitForSeconds(1f);
        Destroy(hand.gameObject);
    }

    public void CTAClicked()
    {
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/bid-wars-2-pawn-shop-tycoon/id1262445849", "https://play.google.com/store/apps/details?id=br.com.tapps.bidwars2");
        Debug.Log("CTA Clicked");
    }

    public void ChangeState(GameState newState)
    {
        CurrentState = newState;

        switch (newState)
        {
            case GameState.MainMenu:
                Time.timeScale = 1f;
                break;
            case GameState.Playing:
                Time.timeScale = 1f;
                break;
            case GameState.Paused:
                Time.timeScale = 0f;
                break;
            case GameState.GameOver:
                Time.timeScale = 1f;
                break;
        }

        Debug.Log("Game State changed to: " + newState);
    }
    public void RestartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        ChangeState(GameState.Playing);
    }

    public void StartMusic()
    {
        AudioManager.Instance.PlayMusic("BGM");
    }
}